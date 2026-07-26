# `hsk_reg_homehealthcare`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rid | int(10) | NO | PRI | 0 |  |  |
| nfname | varchar(200) | YES |  | NULL |  |  |
| age | int(3) | YES |  | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| nfather | varchar(200) | YES |  | NULL |  |  |
| nmather | varchar(200) | YES |  | NULL |  |  |
| hn | varchar(9) | NO | PRI |  |  |  |
| an | varchar(9) | NO | PRI |  |  |  |
| occup | varchar(200) | YES |  | NULL |  |  |
| nation | varchar(100) | YES |  | NULL |  |  |
| educ | varchar(100) | YES |  | NULL |  |  |
| relig | varchar(100) | YES |  | NULL |  |  |
| marry | varchar(20) | YES |  | NULL |  |  |
| informname | varchar(200) | YES |  | NULL |  |  |
| informaddr | text | YES |  | NULL |  |  |
| informtel | varchar(15) | YES |  | NULL |  |  |
| weight | double(6,2) | YES |  | NULL |  |  |
| height | double(6,2) | YES |  | NULL |  |  |
| admit_date | date | YES |  | NULL |  |  |
| admit_total | int(3) | YES |  | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| admit_day | int(3) | YES |  | NULL |  |  |
| pttype | varchar(2) | YES |  | NULL |  |  |
| icd10 | varchar(10) | YES |  | NULL |  |  |
| nfname_list1 | varchar(200) | YES |  | NULL |  |  |
| nfname_type1 | varchar(50) | YES |  | NULL |  |  |
| nfname_list2 | varchar(200) | YES |  | NULL |  |  |
| nfname_type2 | varchar(50) | YES |  | NULL |  |  |
| cc | text | YES |  | NULL |  |  |
| cc_today | text | YES |  | NULL |  |  |
| ph | text | YES |  | NULL |  |  |
| fh | text | YES |  | NULL |  |  |
| factor | text | YES |  | NULL |  |  |
| lab_text | text | YES |  | NULL |  |  |
| drug_hosp1 | text | YES |  | NULL |  |  |
| drug_hosp2 | text | YES |  | NULL |  |  |
| hospcode | varchar(5) | YES |  | NULL |  |  |
| other_hospcode | varchar(100) | YES |  | NULL |  |  |
| patient_type | int(1) | YES |  | NULL |  |  |
| status_type | int(1) | YES |  | NULL |  |  |
| status_pass | int(1) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |
| reg_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | rid | yes | 1 |
| PRIMARY | hn | yes | 2 |
| PRIMARY | an | yes | 3 |
| UK | cid | yes | 1 |
| UK | hn | yes | 2 |
| UK | an | yes | 3 |
| UK | status_pass | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
