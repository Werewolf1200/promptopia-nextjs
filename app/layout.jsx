import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";


export const metadata = {
    title: "Promptopia",
    description: "Discovern & Share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
      <html lang="en">
          <body>
              <Provider>
              <div className="main">
                  <div className="gradient" />
              </div>
              
              <main className="app">
                  <Nav />
                  <Provider />
                  {children}
                </main>  
                    </Provider>
              
          </body>
          
    </html>
  )
}

export default RootLayout;