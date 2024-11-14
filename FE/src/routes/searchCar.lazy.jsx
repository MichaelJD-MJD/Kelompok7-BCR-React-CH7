import { createLazyFileRoute } from '@tanstack/react-router'
// import Protected from "../components/Auth/Protected";
import Banner from '../components/User/Banner/Banner'
import SearchBar from '../components/User/SearchBar/SearchBar'

export const Route = createLazyFileRoute('/searchCar')({
  component: () => (
    // <Protected roles={[1, 2]}>
    <SearchCar />
    // </Protected>
  ),
})

function SearchCar() {
  return (
    <div className="flex flex-col">
      <Banner />
      <SearchBar />
      {/* <Container> */}

      {/* </Container> */}
    </div>
  )
}
