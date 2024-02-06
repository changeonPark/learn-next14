const Page = ({ params: { id } }: { params: { id: string } }) => {
  // { params: { id: '1' }, searchParams: { region: 'kr', page: '2' } }
  console.log(id)

  return <h1>Movie: {id}</h1>
}

export default Page
