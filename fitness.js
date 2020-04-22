var yourFitness = [];

yourFitness.myName = "Gil";
yourFitness.labels = ["March", "April", "May", "June", "July", "August", "September", "October"]; //6 month progress tracker

yourFitness.bellyGoal = 32;
yourFitness.bellyData = [36.5, 35.25, 34.5, 34.0, 34.0, 33.75];


yourFitness.chestGoal = 42;
yourFitness.chestData = [40, 40.5, 41.0, 41.25, 41.25, 41.75];

yourFitness.bicepsGoal = 15;
yourFitness.bicepsData = [14, 14.25, 14.5, 14.5, 14.5, 14.75];

yourFitness.weightGoal = 200;
yourFitness.weightData = [180, 175, 178, 173, 175, 178];

yourFitness.init = function() {
    this.customizePage();

    belly = {
        labels: this.labels,
        datasets: [this.getGoalDataSet(this.bellyArr), this.getProgressDataSet(this.bellyData)]
    };

    new Chart(document.getElementById("waist").getContext("2d")).Line(belly);
    document.getElementById("waist-status").innerHTML = this.determineProgress(this.bellyGoal, this.bellyData, "lower");

    chest = {
        labels: this.labels,
        datasets: [this.getGoalDataSet(this.chestArr), this.getProgressDataSet(this.chestData)]
    };

    new Chart(document.getElementById("chest").getContext("2d")).Line(chest);
    document.getElementById("chest-status").innerHTML = this.determineProgress(this.chestGoal, this.chestData, "higher");

    biceps = {
        labels: this.labels,
        datasets: [this.getGoalDataSet(this.bicepsArr), this.getProgressDataSet(this.bicepsData)]
    };

    new Chart(document.getElementById("biceps").getContext("2d")).Line(biceps);
    document.getElementById("biceps-status").innerHTML = this.determineProgress(this.bicepsGoal, this.bicepsData, "higher");

    weight = {
        labels: this.labels,
        datasets: [this.getGoalDataSet(this.weightArr), this.getProgressDataSet(this.weightData)]
    };

    new Chart(document.getElementById("weight").getContext("2d")).Line(weight);
    document.getElementById("weight-status").innerHTML = this.determineProgress(this.weightGoal, this.weightData, "lower");

};

yourFitness.customizePage = function() {
    document.getElementById("title").innerHTML = '<span class="icon-296 pr10"></span>' + this.myName + '\'s Fitness Tracker';
};

yourFitness.initGoalArray = function(goal) {
    a = [];
    for (var i = this.labels.length - 1; i >= 0; i--) {
        a.push(goal);
    }

    return a;
};

yourFitness.getGoalDataSet = function(goal) {
    return {
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        data: goal
    };
};

yourFitness.getProgressDataSet = function(progress) {
    return {
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        data: progress
    };
};

yourFitness.determineProgress = function(goal, data, type) {

    if (type == "lower") {
        if (goal >= data[data.length - 1]) {
            return "<span class='icon-368 text-success'></span> Nailed it!";

        } else if (data[data.length - 2] > data[data.length - 1]) {
            left = data[data.length - 1] - goal;

            return "<span class='icon-211 text-primary'></span> -" + left + " inches to go!";
        } else {
            return "<span class='icon-212 text-danger'></span> Keep at it!";
        }
    } else {
        if (goal <= data[data.length - 1]) {
            return "<span class='icon-368 text-success'></span> Nailed it!";

        } else if (data[data.length - 2] < data[data.length - 1]) {
            left = goal - data[data.length - 1];
            return "<span class='icon-211 text-primary'></span> " + left + " inches to go!";
        } else {
            return "<span class='icon-212 text-danger'></span> Keep at it!";
        }

    }

};

yourFitness.bellyArr = yourFitness.initGoalArray(yourFitness.bellyGoal);
yourFitness.chestArr = yourFitness.initGoalArray(yourFitness.chestGoal);
yourFitness.bicepsArr = yourFitness.initGoalArray(yourFitness.bicepsGoal);
yourFitness.weightArr = yourFitness.initGoalArray(yourFitness.weightGoal);

$(document).ready(function() {
            yourFitness.init();
        );