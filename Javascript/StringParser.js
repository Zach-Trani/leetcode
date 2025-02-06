// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// replace() & split()

// string as a url, no other ds, no spaces
// string as a domain, no prefix, no suffix

function domainName(url){

    // replace http://, https://, www.
    // split on . & store in arr
    let stringParsed = url.replace('http://','').replace('https://','').replace('www.','').split('.')
    return stringParsed[0]

}
 console.log(domainName("http://github.com/carbonfive/raygun"), domainName("http://www.zombie-bites.com"), domainName("https://www.cnet.com"))

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet