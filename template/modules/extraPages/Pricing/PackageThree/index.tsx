import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import PackageCard from "./PackageCard";
import AppCard from "@crema/components/AppCard";
import type { PricingFourType } from "@crema/types/models/extrapages/Pricing";

type Props = {
  pricing: PricingFourType[];
};

const PackageThree = ({ pricing }: Props) => {
  return (
    <AppCard title="Pricing Package Style 3" sxStyle={{ alignItems: "center" }}>
      <AppGridContainer
        sx={{
          maxWidth: 1000,
          justifyContent: "center",
        }}
      >
        {pricing.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PackageCard pricing={data} />
          </Grid>
        ))}
      </AppGridContainer>
    </AppCard>
  );
};

export default PackageThree;
