# `james_f43_village`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| VID | varchar(8) | YES |  | NULL |  |  |
| NTRADITIONAL | varchar(4) | YES |  | NULL |  |  |
| NMONK | varchar(4) | YES |  | NULL |  |  |
| NRELIGIONLEADER | varchar(4) | YES |  | NULL |  |  |
| NBROADCAST | varchar(2) | YES |  | NULL |  |  |
| NRADIO | varchar(2) | YES |  | NULL |  |  |
| NPCHC | varchar(2) | YES |  | NULL |  |  |
| NCLINIC | varchar(3) | YES |  | NULL |  |  |
| NDRUGSTORE | varchar(3) | YES |  | NULL |  |  |
| NCHILDCENTER | varchar(3) | YES |  | NULL |  |  |
| NPSCHOOL | varchar(2) | YES |  | NULL |  |  |
| NSSCHOOL | varchar(2) | YES |  | NULL |  |  |
| NTEMPLE | varchar(2) | YES |  | NULL |  |  |
| NRELIGIOUSPLACE | varchar(2) | YES |  | NULL |  |  |
| NMARKET | varchar(2) | YES |  | NULL |  |  |
| NSHOP | varchar(3) | YES |  | NULL |  |  |
| NFOODSHOP | varchar(3) | YES |  | NULL |  |  |
| NSTALL | varchar(3) | YES |  | NULL |  |  |
| NRAINTANK | varchar(3) | YES |  | NULL |  |  |
| NCHICKENFARM | varchar(3) | YES |  | NULL |  |  |
| NPIGFARM | varchar(3) | YES |  | NULL |  |  |
| WASTEWATER | varchar(1) | YES |  | NULL |  |  |
| GARBAGE | varchar(1) | YES |  | NULL |  |  |
| NFACTORY | varchar(3) | YES |  | NULL |  |  |
| LATITUDE | varchar(10) | YES |  | NULL |  |  |
| LONGITUDE | varchar(10) | YES |  | NULL |  |  |
| OUTDATE | varchar(8) | YES |  | NULL |  |  |
| NUMACTUALLY | varchar(2) | YES |  | NULL |  |  |
| RISKTYPE | varchar(3) | YES |  | NULL |  |  |
| NUMSTATELESS | varchar(3) | YES |  | NULL |  |  |
| NEXERCISECLUB | varchar(3) | YES |  | NULL |  |  |
| NOLDERLYCLUB | varchar(3) | YES |  | NULL |  |  |
| NDISABLECLUB | varchar(3) | YES |  | NULL |  |  |
| NNUMBERONECLUB | varchar(3) | YES |  | NULL |  |  |
| D_UPDATE | varchar(14) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| D_UPDATE | D_UPDATE | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "HOSPCODE": "12251",
    "VID": "10010901",
    "NTRADITIONAL": "0",
    "NMONK": "0",
    "NRELIGIONLEADER": "0",
    "NBROADCAST": "0",
    "NRADIO": "0",
    "NPCHC": "0",
    "NCLINIC": "0",
    "NDRUGSTORE": "0",
    "NCHILDCENTER": "",
    "NPSCHOOL": "0",
    "NSSCHOOL": "0",
    "NTEMPLE": "0",
    "NRELIGIOUSPLACE": "0",
    "NMARKET": "",
    "NSHOP": "0",
    "NFOODSHOP": "0",
    "NSTALL": "0",
    "NRAINTANK": "0",
    "NCHICKENFARM": "0",
    "NPIGFARM": "0",
    "WASTEWATER": "2",
    "GARBAGE": "",
    "NFACTORY": "0",
    "LATITUDE": "",
    "LONGITUDE": "",
    "OUTDATE": "",
    "NUMACTUALLY": "0",
    "RISKTYPE": "",
    "NUMSTATELESS": "",
    "NEXERCISECLUB": "0",
    "NOLDERLYCLUB": "0",
    "NDISABLECLUB": "0",
    "NNUMBERONECLUB": "0",
    "D_UPDATE": "20130929142128"
  }
]
```
