# `ncr_patient`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ptt_pn | varchar(9) | YES | MUL | NULL |  |  |
| ptt_first_name | varchar(20) | YES |  | NULL |  |  |
| ptt_last_name | varchar(25) | YES |  | NULL |  |  |
| ptt_prefix | varchar(15) | YES |  | NULL |  |  |
| ptt_sex | char(1) | YES |  | NULL |  |  |
| ptt_birthdate | varchar(10) | YES |  | NULL |  |  |
| ptt_marital | char(1) | YES |  | NULL |  |  |
| ptt_address1 | varchar(50) | YES |  | NULL |  |  |
| ptt_address2 | varchar(50) | YES |  | NULL |  |  |
| ptt_amphur | char(2) | YES |  | NULL |  |  |
| ptt_province | char(2) | YES |  | NULL |  |  |
| ptt_zipcode | varchar(5) | YES |  | NULL |  |  |
| ptt_tel_home | varchar(20) | YES |  | NULL |  |  |
| ptt_office | varchar(30) | YES |  | NULL |  |  |
| ptt_tel_office | varchar(20) | YES |  | NULL |  |  |
| ptt_ref_name | varchar(30) | YES |  | NULL |  |  |
| ptt_category | varchar(20) | YES |  | NULL |  |  |
| ptt_allg | char(3) | YES |  | NULL |  |  |
| ptt_id | varchar(13) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ptt_pn | ptt_pn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
