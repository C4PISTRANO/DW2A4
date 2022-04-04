const Modal = {
    open(){
        // Abrir modal
        // Add a class active ao Modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close(){
        // Fechar o modal
        // Remover a class active do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}
    
    // Eu preciso somar as entradas
    // depois eu preciso somar as sáidas e 
    // remover das entradas o valor das saídas
    //assim, eu terei o total


const Transaction = {
    all: [
        {
            description: 'luz',
            amount: -50001,
            date: '29/03/2022',
        },
        {
            description: 'Website',
            amount: 502000,
            date: '29/03/2022',
        },
        {
            description: 'Internet',
            amount: -20012,
            date: '29/03/2022',
        },
        {
            description: 'App',
            amount: 200000,
            date: '29/03/2022',
        },
    ],

    add(transaction){
        Transaction.all.push(transaction)

        App.reload()
    },

    remove(index) {
        Transaction.all.splice(index, 1)

        App.reload()
    },
    // somar a uma variável e retornar a variavel
    
    incomes(){ // somar as entradas
        let income = 0;
            // pegar todas as transações
            // para cada transação,
        Transaction.all.forEach(transaction => {
            //se ela for maior que zero
            if(transaction.amount > 0){
                // somar a uma variável e retornar a variavel
                income += transaction.amount;
            }
        })
        return income;
    },
    expenses() { // somar as saídas
        let expense = 0;
            // pegar todas as transações
            // para cada transação,
        Transaction.all.forEach(transaction => {
            //se ela for menor que zero
            if(transaction.amount < 0){
                // somar a uma variável e retornar a variavel
                expense += transaction.amount;
            }
        })
        return expense;
    },
    total(){ // entradas - saídas
        return Transaction.incomes() + Transaction.expenses();
    }

}

// Substituir os dados do HTML com os dados do JS
const DOM = { // DOM - Document Object Model
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index){
        console.log(transaction)
        const tr = document.createElement ('tr')
        tr.innerHTML = DOM.innerHTMLTrasaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
        
    },
    innerHTMLTrasaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCUrrency(transaction.amount)
        
        const html = `        
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date" >${transaction.date}</td>
        <td><img src="./assets/minus.svg" alt="Remover Transação"></td>
        
        `

        return html
    },

    updateBalance() {
        document
            .getElementById("incomeDisplay")
            .innerHTML = Utils.formatCUrrency(Transaction.incomes())
        document
            .getElementById("expenseDisplay")
            .innerHTML = Utils.formatCUrrency(Transaction.expenses())
        document
            .getElementById("totalDisplay")
            .innerHTML = Utils.formatCUrrency(Transaction.total())
    },

    clearTransactions () {
        DOM.transactionsContainer.innerHTML = ""
    }
}

const Utils ={
    formatCUrrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency:"BRL"
        })

        return signal + value
    }
}

const Form = { 
    submit(event) {
        event.preventDefault()   //REVISAR A PARTIR DAQUI
    }
}

const App = {
    init() {

        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })
        
        DOM.updateBalance()
        
        
    },
    reload() {
        DOM.clearTransactions()
        App.init()
    },
}

App.init()