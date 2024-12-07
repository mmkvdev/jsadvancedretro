function this_exampe_func_a () {
    console.log(this.this_exampe_func_b())
}

function this_exampe_func_b () {
    return 2;
}

this_exampe_func_a();