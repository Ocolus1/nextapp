import "../public/css/page.css";
import "./../public/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
// import "../public/css/mycss.css"
// import "../public/demo/demo.css";
// import "jquery/src/jquery";
// import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/js/dist/carousel";
export default function MyApp({ Component, pageProps }) {
  if (typeof window !== undefined) {
    try{
      import("jquery/src/jquery");
    import("bootstrap/dist/js/bootstrap.bundle");
    import("bootstrap/js/dist/carousel");
    }
    catch(ex){
      console.log(ex)
    }
  }
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
