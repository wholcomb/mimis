import { getNeo4j } from '$lib/neo4jDriver'

export const searchTree = async (path: Array<string>) => {
  const driver = getNeo4j()
  try {
    const session = driver.session()
    const query = (path.length === 0 ? (
      `
        MATCH (start:Root)-[children:CONTAINS|CONNECTS]->(child)
        RETURN [] as path, children.path as container, child
      `
    ) : (
      `
        WITH $elems as pathElems
        MATCH path = (start:Root)-[:CONTAINS|CONNECTS*]->(end)
        MATCH (end)-[children:CONTAINS|CONNECTS]->(child)
        WITH pathElems, path, children, child, [
          rel in relationships(path)
          WHERE NOT isEmpty(rel.path)
          | rel.path
        ] as elements
        WHERE size(elements) = size(pathElems)
        AND ALL(
          i IN range(0, size(pathElems) - 1)
          WHERE
            pathElems[i] = '*'
            OR elements[i] = pathElems[i]
        )
        RETURN DISTINCT elements as path, children.path as container, child
      `
    ))
    const result = await session.run(query, { elems: path })
    await session.close()
    return result.records
  } finally {
    driver.close()
  }
}