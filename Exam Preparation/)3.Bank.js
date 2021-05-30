class Bank{
    constructor(bankName){
        this._bankName = bankName;
        this.allCustomers = [];
    }

    //newCustomer
    newCustomer(customer){
        this.allCustomers.find(c => {
            c.personalId === customer.personalId ?
            customer.totalMoney = 0
            customer.transactions = []
            this.allCustomers.push(customer) ;
            (function(){throw new Error (`${customer.firstName} ${customer.lastName} is already our customer!`)}());
        })
        
        return customer
        /*if(){
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        else{
            this.allCustomers.push(customer)
        }*/
    }
    //depositMoney
    depositMoney(personalId, amount){
        const customer = this.allCustomers.find(c => 
            c.personalId == personalId);
            if(!customer){
                throw new Error('We have no customer with this ID!');
            }
            
            customer.totalMoney += amount;
            customer.transactions.unshift(`${customer.transactions.length + 1} ${customer.firstName} ${customer.lastName} made deposit of ${+amount}$!`);
            return (customer.totalMoney) + '$';


    }
    /*depositMoney(personalId, amount) {
        let customer = this.allCustomers.find(c => c.personalId === personalId);
 
        if (!customer) {
            throw new Error(`We have no customer with this ID!`)
        }
 
        if (!customer.totalMoney) {
            customer.totalMoney = Number(amount);
            customer.transactions = [];
        } else {
            customer.totalMoney += Number(amount);
        }
 
        customer.transactions.unshift(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`)
 
        return `${customer.totalMoney}$`
    }*/
 
    //withdrawMoney

    //customerInfo
}
let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

/*console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));*/


