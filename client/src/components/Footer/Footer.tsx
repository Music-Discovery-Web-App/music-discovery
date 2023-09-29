import musicIcon from "../../assets/icons8-music.svg"

const Footer = () => {
  return (
    // <div className="w-full justify-center bg-grey">Footer</div>
    <footer className="flex flex-col items-center bg-neutral-900 text-center text-white">
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center">
          <a
          href="#"
          type="button"
          className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase">
          <img src={musicIcon}/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
