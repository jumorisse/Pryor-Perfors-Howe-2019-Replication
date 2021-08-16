
data{
    int<lower=1> N;
    int dilemma_rating[N];
    int both_infos[N];
    int ingroup_norm[N];
    int dilemma_version[N];
}
parameters{
    ordered[5] cutpoints;
    real<lower=0> bIn;
    real bBoth;
    real bVers;
}
transformed parameters{
    real bOut = -1.4166666667 * bIn;
}
model{
    vector[N] phi;
    cutpoints ~ normal( 0 , 10 );
    bIn ~ normal( 0.816 , 0.5 );
    bBoth ~ normal( 0 , 0.5 );
    bVers ~ uniform(-1, 1);
    for ( i in 1:N ) {
        phi[i] = bIn * ingroup_norm[i] + bBoth * both_infos[i] + bOut * both_infos[i] * ingroup_norm[i] + bVers * dilemma_version[i];
        dilemma_rating[i] ~ ordered_logistic( phi[i] , cutpoints );
    }
}
generated quantities{
    vector[N] phi;
    real dev;
    vector[N] log_lik;
    dev = 0;
    for ( i in 1:N ) {
        phi[i] = bIn * ingroup_norm[i] + bBoth * both_infos[i] + bOut * both_infos[i] * ingroup_norm[i] + bVers * dilemma_version[i];
    dev = dev + (-2)*ordered_logistic_lpmf( dilemma_rating[i] | phi[i] , cutpoints );
    log_lik[i] = ordered_logistic_lpmf( dilemma_rating[i] | phi[i] , cutpoints );
    }
}
