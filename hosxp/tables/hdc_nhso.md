# `hdc_nhso`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| Person_ID | varchar(13) | NO | PRI | NULL |  |  |
| Title | varchar(20) | YES |  | NULL |  |  |
| Fname | varchar(40) | YES |  | NULL |  |  |
| Lname | varchar(40) | YES |  | NULL |  |  |
| Sex | varchar(1) | YES |  | NULL |  |  |
| BirthDate | date | YES |  | NULL |  |  |
| Nation | varchar(3) | YES |  | NULL |  |  |
| Status | varchar(10) | YES |  | NULL |  |  |
| StatusName | varchar(200) | YES |  | NULL |  |  |
| Purchase | varchar(60) | YES |  | NULL |  |  |
| Chat | varchar(8) | YES |  | NULL |  |  |
| Province_Name | varchar(60) | YES |  | NULL |  |  |
| Amphur_name | varchar(60) | YES |  | NULL |  |  |
| Tumbon_name | varchar(60) | YES |  | NULL |  |  |
| Moo | varchar(3) | YES |  | NULL |  |  |
| MooBan_Name | varchar(60) | YES |  | NULL |  |  |
| Pttype | varchar(2) | YES |  | NULL |  |  |
| MasterCupID | varchar(11) | YES |  | NULL |  |  |
| MainInscl | varchar(20) | YES |  | NULL |  |  |
| MainInscl_Name | varchar(200) | YES |  | NULL |  |  |
| SubInscl | varchar(20) | YES |  | NULL |  |  |
| SubInscl_Name | varchar(200) | YES |  | NULL |  |  |
| Card_ID | varchar(20) | YES |  | NULL |  |  |
| HMain | varchar(5) | YES |  | NULL |  |  |
| HMain_Name | varchar(200) | YES |  | NULL |  |  |
| HMainOP | varchar(5) | YES |  | NULL |  |  |
| HSub | varchar(5) | YES |  | NULL |  |  |
| HSub_Name | varchar(200) | YES |  | NULL |  |  |
| StartDate | date | YES |  | NULL |  |  |
| ExpDate | date | YES |  | NULL |  |  |
| Remark | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | Person_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
