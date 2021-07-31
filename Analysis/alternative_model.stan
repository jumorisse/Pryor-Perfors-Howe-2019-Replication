
data{
    int<lower=1> N;
    double dilemma_rating[N];
    double both_infos[N];
    double ingroup_norm[N];
}
parameters{
    ordered[5] cutpoints;
    real<lower=0> bIn;
    real bBoth;
}
transformed parameters{
  real bOut = -0.85 / 0.6 * bIn;
}
model{
    vector[N] phi;
    cutpoints ~ normal( 0 , 10 );
    bIn ~ normal( 0.816 , 0.5 );
    bBoth ~ normal( 0 , 0.5 );
    for ( i in 1:N ) {
        phi[i] = bIn * ingroup_norm[i] + bBoth * both_infos[i] + bOut * both_infos[i] * ingroup_norm[i];
        dilemma_rating[i] ~ ordered_logistic( phi[i] , cutpoints );
    }
}
generated quantities{
    vector[N] phi;
    real dev;
    vector[N] log_lik;
    dev = 0;
    for ( i in 1:N ) {
        phi[i] = bIn * ingroup_norm[i] + bBoth * both_infos[i] + bOut * both_infos[i] * ingroup_norm[i];
    dev = dev + (-2)*ordered_logistic_lpmf( dilemma_rating[i] | phi[i] , cutpoints );
    log_lik[i] = ordered_logistic_lpmf( dilemma_rating[i] | phi[i] , cutpoints );
    }
}
