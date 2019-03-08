# Requirements
  # GDAL/OGR

GENERATED_FILES = snowEmergencies.json
DATADIR = data

all: $(GENERATED_FILES)

clean:
	rm -rf $(DATADIR)

data:
	mkdir -p $(DATADIR)

.PHONY: all clean data


snowEmergencies.json: quincy.geojson yale.geojson armatage.geojson
	@echo "Merging geojson to topojson..."; \
	cd $(DATADIR); \
	mapshaper \
		-i $^ \
		combine-files \
		-o $@ \
		format=topojson

quincy.geojson: data
	@echo "Downloading quincy..."; \
	wget --no-use-server-timestamps \
	https://opendata.arcgis.com/datasets/9cdebb43979247f79c003e85874f0dc0_0.geojson -O $(DATADIR)/$@ 

yale.geojson: data
	@echo "Downloading yale..."; \
	wget --no-use-server-timestamps \
	https://opendata.arcgis.com/datasets/e9ff65d83e744cce9ee6555ba5850449_0.geojson -O $(DATADIR)/$@ 

armatage.geojson: data
	@echo "Downloading armatage..."; \
	wget --no-use-server-timestamps \
	https://opendata.arcgis.com/datasets/e58926289dda4ecc97d5534bab700241_0.geojson -O $(DATADIR)/$@ 