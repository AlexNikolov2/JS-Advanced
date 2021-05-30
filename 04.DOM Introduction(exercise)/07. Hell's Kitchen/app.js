function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const input = document.querySelector('#inputs>textarea');
   const bestRestaurantP = document.querySelector('#bestRestaurant>p');
   const workersP = docuemtn.querySelector('#workers>p');

   function onClick () {
      const arr = JSON.parse(input.value);

      let restaurants = [];

      arr.array.forEach((line) => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArr = tokens[1].split(', ');
         let workers = [];

         for (let workers of workersArr) {
            const workerTokens = worker.split(' ');
            const salary = Number(workerTokens[1]);
            workers.push({name: workerTokens[0], salary});
         }
      });

         if(restaurants.name){
            workers = workers.concat(restaurants[name].no)
         }

         workers.sort(worker1,worker2 => worker2.salary - worker1.salary);

         const bestSalary = worker[0].salary;
         const averageSalary = workers.reduce(sum,worker => sum + worker.salary,0) / workers.length

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }

         let bestRestaurantSalary = 0;
         let best  = undefined;

         if()
      

      
   }
}