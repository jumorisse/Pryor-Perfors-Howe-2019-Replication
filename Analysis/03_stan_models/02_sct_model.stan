
data{
    int<lower=1> N;
    int dilemma_rating[N];
    int both_infos[N];
    int ingroup_norm[N];
    int ingroup_agree[N];
    int outgroup_disagree[N];
}
parameters{
    real<lower=0> bIn;
    real bBoth;
    real<lower=0> bOut;
    ordered[5] cutpoints;
}
model{
    vector[N] phi;
    cutpoints ~ normal( 0 , 10 );
    bBoth ~ normal( 0 , 0.5 );
    bOut ~ normal( 0 , 0.5 );
    bIn ~ normal( 0.6/0.75 * 1.02 , 0.5 );
    for ( i in 1:N ) {
        phi[i] = bIn * ingroup_norm[i] * ingroup_agree[i] + bBoth * both_infos[i] + bOut * both_infos[i] * ingroup_norm[i] * outgroup_disagree[i];
        dilemma_rating[i] ~ ordered_logistic( phi[i] , cutpoints );
    }
}
generated quantities{
    vector[N] phi;
    real dev;
    vector[N] log_lik;
    dev = 0;
    for ( i in 1:N ) {
        phi[i] = bIn * ingroup_norm[i] * ingroup_agree[i] + bBoth * both_infos[i] + bOut * both_infos[i] * ingroup_norm[i] * outgroup_disagree[i];
        dev = dev + (-2)*ordered_logistic_lpmf( dilemma_rating[i] | phi[i] , cutpoints );
        log_lik[i] = ordered_logistic_lpmf( dilemma_rating[i] | phi[i] , cutpoints );
    }
}
