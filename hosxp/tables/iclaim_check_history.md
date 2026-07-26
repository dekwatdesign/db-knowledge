# `iclaim_check_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_check_history_id | int(11) | NO | PRI | 0 |  |  |
| further_claim_id | varchar(200) | YES |  | NULL |  |  |
| claim_no | varchar(200) | YES |  | NULL |  |  |
| occurrence_no | varchar(200) | YES |  | NULL |  |  |
| accident_time | datetime | YES |  | NULL |  |  |
| icd10 | varchar(100) | YES |  | NULL |  |  |
| description | text | YES |  | NULL |  |  |
| json | text | YES |  | NULL |  |  |
| iclaim_service_id | int(11) | YES |  | NULL |  |  |
| visit_date | date | YES |  | NULL |  |  |
| principle_icd10 | varchar(100) | YES |  | NULL |  |  |
| principle_icd10_desc | text | YES |  | NULL |  |  |
| insure_code | varchar(50) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| ref_id | varchar(100) | YES |  | NULL |  |  |
| priviledge_card_no | varchar(250) | YES |  | NULL |  |  |
| id_type | varchar(100) | YES |  | NULL |  |  |
| illness_type | char(10) | YES |  | NULL |  |  |
| service_setting | char(3) | YES |  | NULL |  |  |
| claim_from_motorcycle | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | iclaim_check_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
