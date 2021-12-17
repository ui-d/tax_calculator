import Form from './components/TaxForm'
import Navbar from './components/Navbar'
import TaxTable from './components/TaxTable'
import Footer from './components/Footer'
import Card from './components/MainCard'

import TaxProvider from './contexts/TaxContext'
import FormProvider from './contexts/FormContext'
import Divider from './components/Divider'

function App() {
    return (
        <div className="App">
            <div className="container mx-auto flex flex-col h-screen justify-between">
                <div>
                    <Navbar />
                    <main>
                        <FormProvider>
                            <TaxProvider>
                                <Form />
                                <Card />
                                <TaxTable />
                            </TaxProvider>
                        </FormProvider>
                    </main>
                </div>
                <Footer className="mb-auto" />
            </div>
        </div>
    )
}

export default App
