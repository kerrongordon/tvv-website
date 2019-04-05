import Head from 'next/head'

const Page = (props) => (
    <div>
        <Head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="format-detection" content="telephone=no" />
            <title>Tech View Ventures</title>

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet"/>
            <link href="/static/css/style.css" type="text/css" rel="stylesheet" />
        </Head>
        {props.children}
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
    </div>
)

export default Page