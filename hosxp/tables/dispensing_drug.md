# `dispensing_drug`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dispensing_drug_id | int(11) | NO | PRI | 0 |  |  |
| HCODE | varchar(9) | YES |  | NULL |  |  |
| PERSON_ID | varchar(13) | YES |  | NULL |  |  |
| DATE_SERV | date | YES |  | NULL |  |  |
| CLINIC_CODE | varchar(5) | YES |  | NULL |  |  |
| CLINIC_NAME | varchar(99) | YES |  | NULL |  |  |
| SEQ | decimal(10,0) | YES | MUL | NULL |  |  |
| HN | varchar(15) | YES | MUL | NULL |  |  |
| AN | varchar(15) | YES | MUL | NULL |  |  |
| DRUG_STD_CODE | varchar(24) | YES |  | NULL |  |  |
| DRUG_STD_NAME | varchar(255) | YES |  | NULL |  |  |
| AMOUNT | decimal(10,0) | YES |  | NULL |  |  |
| DRUG_PRICE | decimal(10,0) | YES |  | NULL |  |  |
| DRUG_COST | decimal(10,0) | YES |  | NULL |  |  |
| UNIT | varchar(20) | YES |  | NULL |  |  |
| UNIT_PACKING | varchar(20) | YES |  | NULL |  |  |
| DID | varchar(30) | YES |  | NULL |  |  |
| DIDNAME | varchar(255) | YES |  | NULL |  |  |
| DISPENSE_DATE | datetime | YES |  | NULL |  |  |
| DATE_ADMIT_AN | date | YES |  | NULL |  |  |
| DATE_DISCHARGE_AN | date | YES |  | NULL |  |  |
| DOCTOR_CERTIFICATE | varchar(6) | YES |  | NULL |  |  |
| ICD10_CODE | varchar(255) | YES |  | NULL |  |  |
| VN | varchar(12) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | AN | no | 1 |
| ix_hn | HN | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_seq | SEQ | no | 1 |
| ix_vn | VN | no | 1 |
| PRIMARY | dispensing_drug_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
