# `tmlt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| TMLT_Code | varchar(15) | NO | PRI |  |  |  |
| TMLT_Name | varchar(200) | NO | PRI |  |  |  |
| Component | varchar(200) | YES |  | NULL |  |  |
| Scale | varchar(40) | YES |  | NULL |  |  |
| Unit | varchar(40) | YES |  | NULL |  |  |
| Specimen | varchar(40) | YES |  | NULL |  |  |
| Method | varchar(40) | YES |  | NULL |  |  |
| Order_Type | varchar(40) | YES |  | NULL |  |  |
| Loinc_Num | varchar(20) | YES |  | NULL |  |  |
| Status | varchar(100) | YES |  | NULL |  |  |
| VersionFirstRelease | varchar(20) | YES |  | NULL |  |  |
| VersionLastRelease | varchar(20) | YES |  | NULL |  |  |
| NHSO_ADP_Code | varchar(15) | YES |  | NULL |  |  |
| NHSO_ADP_Code_Name | varchar(200) | YES |  | NULL |  |  |
| Price | double(15,2) | YES |  | NULL |  |  |
| MainCode | varchar(20) | YES |  | NULL |  |  |
| SubCode | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | TMLT_Code | yes | 1 |
| PRIMARY | TMLT_Name | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
