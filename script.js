let selectGenerator = document.getElementById("selectGenerator");
let generatorCount = document.getElementById('generatorCount');
let generatorPower = document.getElementById('generatorPower');

let consumer = document.getElementById('consumer');
let consumerCount = document.getElementById('consumerCount');
let timeOfWork = document.getElementById('timeOfWork');

let file = document.getElementById('file');
let progressNumber = document.getElementById('progress-number');

function myFunction() {
    let generatorPowerValue = selectGenerator.value;
    let count = generatorCount.value;

    let consumerPower = consumer.value;
    let consumerCountValue = consumerCount.value
    let consumerTimeOfWork = timeOfWork.value;

    if (generatorPowerValue && count) {
        let generalPower = generatorPowerValue * count;
        generatorPower.innerHTML = generalPower;

        if (consumerPower && consumerCountValue && consumerTimeOfWork) {
            let generalConsumerValue = (consumerPower * consumerCountValue * consumerTimeOfWork) / 60;

            file.value = (generalConsumerValue / generalPower) * 100;
            progressNumber.innerHTML = (generalConsumerValue / generalPower) * 100;
        }
    }
}

