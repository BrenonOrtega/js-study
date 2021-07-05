import dotenv from 'dotenv';

const postgresDriver = (() => {
    dotenv.config();
    console.log("selfinvoked");
    return {
        name:"olha só",
        id:1
    }
    
})();





const main = () => {
    const driver = postgresDriver;

    console.log(driver);
}

main();