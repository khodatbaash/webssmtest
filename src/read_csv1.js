$.ajax({
    url: "../data/stddev.csv",
    async: false,
    success: function (csvd) {
        stddev1 = $.csv.toArrays(csvd);
        console.log(stddev1)
    },
    dataType: "text",
    complete: function () {
    }
});
$.ajax({
    url: "../data/basisMatrix.csv",
    async: false,
    success: function (csvd) {
        basisMatrix1 = $.csv.toArrays(csvd);
    },
    dataType: "text",
    complete: function () {
    }
});
$.ajax({
    url: "../data/meanVector.csv",
    async: false,
    success: function (csvd) {
        meanVector1 = $.csv.toArrays(csvd);
    },
    dataType: "text",
    complete: function () {
    }
});
$.ajax({
    url: "../data/meanShape.csv",
    async: false,
    success: function (csvd) {
        meanShape1 = $.csv.toArrays(csvd);
    },
    dataType: "text",
    complete: function () {
    }
});
