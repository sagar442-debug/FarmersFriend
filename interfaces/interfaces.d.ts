interface Plant {
  id: number;
  common_name: string;
  scientific_name: string;
  other_name: Array<string>;
  family: string;
  hybrid: boolean;
  authority: string;
  subspecies: string;
  cultivar: string;
  variety: string;
  species_epithet: string;
  genus: string;
  default_image: {
    license: number;
    license_name: string;
    license_url: string;
    original_url: string;
    regular_url: string;
    medium_url: string;
    small_url: string;
    thumbnail: string;
  };
}
