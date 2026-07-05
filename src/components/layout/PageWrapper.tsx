interface Props{
children:React.ReactNode;
}

export default function PageWrapper({
children
}:Props){

return(

<main className="min-h-screen">

{children}

</main>

)

}