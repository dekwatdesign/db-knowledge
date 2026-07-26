# `hsk_evaluation_cgi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(5) | NO | PRI | 0 |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| ward | varchar(20) | YES |  | NULL |  |  |
| an | varchar(30) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| sex | int(1) | YES |  | NULL |  |  |
| age_y | int(3) | YES |  | NULL |  |  |
| pdx | varchar(10) | YES |  | NULL |  |  |
| department | varchar(5) | YES |  | NULL |  |  |
| clinic | varchar(10) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| eva_sf | int(1) | YES |  | NULL |  |  |
| eva_si | int(1) | YES |  | NULL |  |  |
| eva_di | int(1) | YES |  | NULL |  |  |
| eva_im | int(1) | YES |  | NULL |  |  |
| cgi_score | int(1) | YES |  | NULL |  |  |
| spell_id | int(1) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |
| date_sub | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | id | yes | 1 |
| vstdate | vstdate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 37870,
    "vstdate": "2024-08-27",
    "vsttime": "11:47:45",
    "ward": "01",
    "an": "670001142",
    "hn": "660001252",
    "sex": 2,
    "age_y": 4,
    "pdx": "F840",
    "department": "IPD",
    "clinic": "038",
    "note": null,
    "staff": "[MASKED_FULLNAME]",
    "eva_sf": 1,
    "eva_si": 1,
    "eva_di": 1,
    "eva_im": 1,
    "cgi_score": 1,
    "spell_id": 1,
    "d_update": "2024-08-27 11:47:45",
    "date_sub": null
  },
  {
    "id": 37871,
    "vstdate": "2024-09-03",
    "vsttime": "15:31:09",
    "ward": null,
    "an": "670827092042",
    "hn": "660001080",
    "sex": 1,
    "age_y": 4,
    "pdx": "F840",
    "department": "OPD",
    "clinic": "003",
    "note": "",
    "staff": "[MASKED_FULLNAME]",
    "eva_sf": 2,
    "eva_si": 3,
    "eva_di": 3,
    "eva_im": 3,
    "cgi_score": 3,
    "spell_id": 1,
    "d_update": "2024-09-03 15:31:09",
    "date_sub": "2024-09-03"
  },
  {
    "id": 37872,
    "vstdate": "2024-09-04",
    "vsttime": "10:02:33",
    "ward": null,
    "an": "580309120000",
    "hn": "530009054",
    "sex": 2,
    "age_y": 7,
    "pdx": "F840",
    "department": "OPD",
    "clinic": "000",
    "note": "",
    "staff": "[MASKED_FULLNAME]",
    "eva_sf": 4,
    "eva_si": 4,
    "eva_di": 4,
    "eva_im": 4,
    "cgi_score": 4,
    "spell_id": 1,
    "d_update": "2024-09-04 10:02:33",
    "date_sub": "2024-09-04"
  },
  {
    "id": 37873,
    "vstdate": "2024-09-04",
    "vsttime": "10:02:58",
    "ward": null,
    "an": "580309120000",
    "hn": "530009054",
    "sex": 2,
    "age_y": 7,
    "pdx": "F840",
    "department": "OPD",
    "clinic": "000",
    "note": "",
    "staff": "[MASKED_FULLNAME]",
    "eva_sf": 6,
    "eva_si": 6,
    "eva_di": 6,
    "eva_im": 6,
    "cgi_score": 6,
    "spell_id": 1,
    "d_update": "2024-09-04 10:02:58",
    "date_sub": "2024-09-04"
  },
  {
    "id": 37874,
    "vstdate": "2024-09-04",
    "vsttime": "10:03:34",
    "ward": null,
    "an": "580309120000",
    "hn": "530009054",
    "sex": 2,
    "age_y": 7,
    "pdx": "F840",
    "department": "OPD",
    "clinic": "000",
    "note": "",
    "staff": "[MASKED_FULLNAME]",
    "eva_sf": 3,
    "eva_si": 3,
    "eva_di": 3,
    "eva_im": 3,
    "cgi_score": 3,
    "spell_id": 1,
    "d_update": "2024-09-04 10:03:34",
    "date_sub": "2024-09-04"
  },
  {
    "id": 37875,
    "vstdate": "2024-09-04",
    "vsttime": "10:03:43",
    "ward": null,
    "an": "580309120000",
    "hn": "530009054",
    "sex": 2,
    "age_y": 7,
    "pdx": "F840",
    "department": "OPD",
    "clinic": "000",
    "note": "",
    "staff": "[MASKED_FULLNAME]",
    "eva_sf": 7,
    "eva_si": 7,
    "eva_di": 7,
    "eva_im": 7,
    "cgi_score": 7,
    "spell_id": 1,
    "d_update": "2024-09-04 10:03:43",
    "date_sub": "2024-09-04"
  },
  {
    "id": 37876,
    "vstdate": "2024-09-04",
    "vsttime": "10:31:42",
    "ward": "03",
    "an": "670001334",
    "hn": "660001242",
    "sex": 1,
    "age_y": 5,
    "pdx": "F840",
    "department": "IPD",
    "clinic": "000",
    "note": null,
    "staff": "[MASKED_FULLNAME]",
    "eva_sf": 3,
    "eva_si": 3,
    "eva_di": 3,
    "eva_im": 3,
    "cgi_score": 3,
    "spell_id": 1,
    "d_update": "2024-09-04 10:31:42",
    "date_sub": null
  },
  {
    "id": 37877,
    "vstdate": "2024-09-04",
    "vsttime": "14:01:04",
    "ward": "03",
    "an": "670001419",
    "hn": "650005914",
    "sex": 1,
    "age_y": 6,
    "pdx": "F840",
    "department": "IPD",
    "clinic": "000",
    "note": null,
    "staff": "[MASKED_FULLNAME]",
    "eva_sf": 2,
    "eva_si": 2,
    "eva_di": 2,
    "eva_im": 3,
    "cgi_score": 3,
    "spell_id": 1,
    "d_update": "2024-09-04 14:01:04",
    "date_sub": null
  }
]
```
