for (const property in statistics) {
    if (property[0] == 'r' || property[0] == 'R'|| statistics[property]%2 != 0) {
        console.log(statistics[property]);
    }
}