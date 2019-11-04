//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade
var calculate = function()
{
    var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

    floatHwPts = parseFloat($("hw_points").value);
    
    floatMidPts = parseFloat($("midterm_points").value);
    
    floatFinPts = parseFloat($("final_points").value);
    
    floatTotalPts = parseFloat(floatMidPts + floatFinPts + floatHwPts);
    
    intGradeOption = parseInt($("grade_type").value);
    
    if (intGradeOption===1)
    {
        if(floatTotalPts >= 80)
        {
            stringFinalGrade = "Pass";
        }
        else
        {
            stringFinalGrade = "Fail";
        }
    }
    else
    {
        if(floatTotalPts >= 90)
        {
            stringFinalGrade = "A";
        }
        else if(floatTotalPts >= 80)
        {
            stringFinalGrade = "B";
        }
        else if(floatTotalPts >= 70)
        {
            stringFinalGrade = "C";
        }
        else if(floatTotalPts >= 60)
        {
            stringFinalGrade = "D";
        }
        else
        {
            stringFinalGrade = "F";
        }
    }
    
    
    $("final_grade").value = stringFinalGrade;
    
}

var $ = function (id) 
{
    return document.getElementById(id);
}

window.onload = function() 
{
    $("hw_points").value = "";
    $("midterm_points").value = "";
    $("final_points").value = "";
    $("grade_type").value = "";
    $("calc").onclick = calculate;
    $("final_grade").focus();
}
