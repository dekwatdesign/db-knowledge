# `clinic_cormobidity_diabete`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| eye_doctor | char(1) | YES |  | NULL |  |  |
| eye_disorder | char(1) | YES |  | NULL |  |  |
| kidney_bun | char(1) | YES |  | NULL |  |  |
| kidney_creatinine | char(1) | YES |  | NULL |  |  |
| nerve_disorder1 | char(1) | YES |  | NULL |  |  |
| nerve_disorder2 | char(1) | YES |  | NULL |  |  |
| nerve_disorder3 | char(1) | YES |  | NULL |  |  |
| nerve_disorder4 | char(1) | YES |  | NULL |  |  |
| nerve_disorder5 | char(1) | YES |  | NULL |  |  |
| nerve_disorder6 | char(1) | YES |  | NULL |  |  |
| blood_disorder1 | char(1) | YES |  | NULL |  |  |
| blood_disorder2 | char(1) | YES |  | NULL |  |  |
| blood_disorder3 | char(1) | YES |  | NULL |  |  |
| foot_disorder1 | char(1) | YES |  | NULL |  |  |
| foot_disorder2 | char(1) | YES |  | NULL |  |  |
| foot_disorder3 | char(1) | YES |  | NULL |  |  |
| foot_disorder4 | char(1) | YES |  | NULL |  |  |
| foot_disorder5 | char(1) | YES |  | NULL |  |  |
| foot_disorder6 | char(1) | YES |  | NULL |  |  |
| foot_disorder7 | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
