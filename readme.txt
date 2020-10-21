bootstrap
email
footer
react-router-dom
react-helmet
react-pdf

git add -A
git commit -m "presentation"
git branch -M main
git push -u origin main


reste meta name description website created using create-react-app

reformater : shift+alt+f

Dans le fichier index.html dans le dossier build, remplacer le head :

<head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="canonical" href={this.props.link} />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="keywords" content="Marine Queste chef de projet portfolio book marketing" />
    <meta name="description" content="Portfolio de Marine Queste, chef de projet" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta property="og:title" content="Portfolio de Marine Queste, chef de projet" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.marinequeste.fr" />
    <meta property="og:image" content="https://marinequeste.fr/img/marine_queste.jpg" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:title" content="Portfolio de Marine Queste, chef de projet" />
    <meta property="og:description" content="Portfolio de Marine Queste, chef de projet" />
    <meta property="og:site_name" content="Portfolio de Marine Queste, chef de projet" />
    <meta name="twitter:description" content="Portfolio de Marine Queste, chef de projet" />
    <meta name="twitter:title" content="Portfolio de Marine Queste, chef de projet" />
    <meta name="twitter:image" content="https://marinequeste.fr/img/marine_queste.jpg" />
    <link rel="manifest" href="/manifest.json" />
    <title>Accueil Portfolio de Marine Queste, chef de projet</title>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
    <script type="text/javascript">
        emailjs.init("user_2PECuh9D5PJF6zxVOkTsj")
    </script>
    <link href="/static/css/2.99f68705.chunk.css" rel="stylesheet">
    <link href="/static/css/main.c890fa15.chunk.css" rel="stylesheet">
</head>