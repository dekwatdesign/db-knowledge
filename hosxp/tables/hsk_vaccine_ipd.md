# `hsk_vaccine_ipd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| name_nf | varchar(100) | YES |  | NULL |  |  |
| vaccine_name1 | varchar(100) | YES | MUL | NULL |  |  |
| vaccine_name2 | varchar(100) | YES | MUL | NULL |  |  |
| vaccine_name3 | varchar(100) | YES | MUL | NULL |  |  |
| vaccine_name4 | varchar(100) | YES | MUL | NULL |  |  |
| vaccine_name1_date | varchar(100) | YES |  | NULL |  |  |
| vaccine_name2_date | varchar(100) | YES |  | NULL |  |  |
| vaccine_name3_date | varchar(100) | YES |  | NULL |  |  |
| vaccine_name4_date | varchar(100) | YES |  | NULL |  |  |
| vaccine_name1_hcode | varchar(100) | YES |  | NULL |  |  |
| vaccine_name2_hcode | varchar(100) | YES |  | NULL |  |  |
| vaccine_name3_hcode | varchar(100) | YES |  | NULL |  |  |
| vaccine_name4_hcode | varchar(100) | YES |  | NULL |  |  |
| vaccine_name1_note | varchar(100) | YES |  | NULL |  |  |
| vaccine_name2_note | varchar(100) | YES |  | NULL |  |  |
| vaccine_name3_note | varchar(100) | YES |  | NULL |  |  |
| vaccine_name4_note | varchar(100) | YES |  | NULL |  |  |
| staff | varchar(255) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| cid | cid | no | 1 |
| PRIMARY | hn | yes | 1 |
| vaccine_name1 | vaccine_name1 | no | 1 |
| vaccine_name2 | vaccine_name2 | no | 1 |
| vaccine_name3 | vaccine_name3 | no | 1 |
| vaccine_name4 | vaccine_name4 | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
