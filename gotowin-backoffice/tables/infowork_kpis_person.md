# `infowork_kpis_person`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| KPIS_ID | int | NO | PRI | NULL | auto_increment |  |
| STRATEGIC_ID | varchar(11) | YES |  | NULL |  |  |
| TARGET_ID | varchar(11) | YES |  | NULL |  |  |
| KPIS_PERSON_CODE | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_NAME | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_DETAIL | varchar(500) | YES |  | NULL |  |  |
| ACTIVE | enum('TRUE','FALSE') | YES |  | TRUE |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| KPIS_PERSON_UNIT | varchar(100) | YES |  | NULL |  |  |
| KPIS_PERSON_WEIGHT | varchar(100) | YES |  | NULL |  |  |
| KPIS_PERSON_GOAL | varchar(100) | YES |  | NULL |  |  |
| KPIS_PERSON_ACCEP | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_CRITICAL | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_RESULTS | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_SCORE | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_SCORE_M1 | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_SCORE_M2 | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_SCORE_M3 | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_SCORE_M4 | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_SCORE_M5 | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_SCORE_M6 | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_SCORE_M7 | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_SCORE_M8 | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_SCORE_M9 | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_SCORE_M10 | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_SCORE_M11 | varchar(255) | YES |  | NULL |  |  |
| KPIS_PERSON_SCORE_M12 | varchar(255) | YES |  | NULL |  |  |
| REYEAR_1 | varchar(255) | YES |  | NULL |  |  |
| REYEAR_2 | varchar(255) | YES |  | NULL |  |  |
| REYEAR_3 | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | KPIS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
