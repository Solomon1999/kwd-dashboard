import pkg from '../../package.json'

export default {
    title: 'K-WD Dashboard',

    banner: `<!--\n * ${pkg.name}: ${pkg.description}\n * version: v${pkg.version}\n * Author: ${pkg.author.name} <${pkg.author.email}>\n * Homepage: ${pkg.homepage}\n * Licensed under ${pkg.license}: ${pkg.repository.url}/blob/main/License.md \n-->`,

    navigationLinks: [
        {
            title: 'Dashboard',
            url: '/',
            iconName: 'tabler--home',
        },
        {
            title: 'Pages',
            url: null,
            iconName: 'tabler--file',
            links: [
                {
                    title: '404',
                    url: '/pages/404.html',
                },
                {
                    title: '500',
                    url: '/pages/500.html',
                },
                {
                    title: 'Blank',
                    url: '/pages/blank.html',
                },
            ],
        },
        {
            title: 'Authentication',
            url: null,
            iconName: 'tabler--shield',
            links: [
                {
                    title: 'Login',
                    url: '/auth/login.html',
                },
                {
                    title: 'Register',
                    url: '/auth/register.html',
                },
                {
                    title: 'Forgot password',
                    url: '/auth/forgot-password.html',
                },
                {
                    title: 'Reset password',
                    url: '/auth/reset-password.html',
                },
            ],
        },
    ],

    simpleStatistics: [
        {
            title: 'Value',
            icon: 'tabler--currency-dollar',
            total: '$30,000',
            percentage: '+4.4%',
            status: 'up',
        },
        {
            title: 'Users',
            icon: 'tabler--users-group',
            total: '50,021',
            percentage: '-2.6%',
            status: 'down',
        },
        {
            title: 'Orders',
            icon: 'tabler--shopping-cart',
            total: '45,021',
            percentage: '3.1%',
            status: 'default',
        },
        {
            title: 'Tickets',
            icon: 'tabler--ticket',
            total: '20,516',
            percentage: '3.1%',
            status: 'up',
        },
    ],

    latestCustomers: [
        {
            name: 'Mamie Wiza',
            email: 'Clovis88&#64;hotmail.com',
            status: 0,
            date: 'Jan 13 2025',
            country: 'Egypt',
            title: '',
            titleDesc: '',
        },
        {
            name: 'Wayne Hoppe I',
            email: 'Angus80&#64;hotmail.com',
            status: 0,
            date: 'Jan 13 2025',
            country: 'China',
            title: '',
            titleDesc: '',
        },
        {
            name: 'Bertha Parker',
            email: 'Kailee.Ortiz31&#64;hotmail.com',
            status: 0,
            date: 'Jan 13 2025',
            country: 'Brazil',
            title: '',
            titleDesc: '',
        },
        {
            name: 'Clara Mills',
            email: 'Marco31&#64;yahoo.com',
            status: 0,
            date: 'Jan 13 2025',
            country: 'Argentina',
            title: '',
            titleDesc: '',
        },
        {
            name: 'Carroll Stracke',
            email: 'Felicia_Mraz&#64;gmail.com',
            status: 0,
            date: 'Jan 13 2025',
            country: 'Indonesia',
            title: '',
            titleDesc: '',
        },
        {
            name: 'Glenda Stroman',
            email: 'Shanna_Gutkowski&#64;yahoo.com',
            status: 0,
            date: 'Jan 13 2025',
            country: 'Lebanon',
            title: '',
            titleDesc: '',
        },
        {
            name: 'Hannah Berge',
            email: 'Dakota.Johnston52&#64;hotmail.com',
            status: 0,
            date: 'Jan 13 2025',
            country: 'Portugal',
            title: '',
            titleDesc: '',
        },
        {
            name: 'Roy Runolfsson',
            email: 'Eduardo60&#64;gmail.com',
            status: 0,
            date: 'Jan 13 2025',
            country: 'Indonesia',
            title: '',
            titleDesc: '',
        },
        {
            name: 'Roberto Collier',
            email: 'Deangelo.Reichert&#64;hotmail.com',
            status: 0,
            date: 'Jan 13 2025',
            country: 'Kenya',
            title: '',
            titleDesc: '',
        },
        {
            name: 'Pat Fisher',
            email: 'Joshuah38&#64;yahoo.com',
            status: 0,
            date: 'Jan 13 2025',
            country: 'Nigeria',
            title: '',
            titleDesc: '',
        },
    ],
}
