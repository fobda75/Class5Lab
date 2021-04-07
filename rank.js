function officer()
{
    $("officer").disable("false");
    $("warrant").disable("true");
    $("enlisted").disable("true");
}

function warrant()
{
    $("officer").disable("true");
    $("warrant").disable("false");
    $("enlisted").disable("true");
}

function enlisted()
{
    $("officer").disable("true");
    $("warrant").disable("true");
    $("enlisted").disable("false");
}