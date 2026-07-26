# `ncr_patient2`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ptt_pn | varchar(8) | YES | MUL | NULL |  |  |
| ptt_address1 | varchar(150) | YES |  | NULL |  |  |
| ptt_address2 | varchar(150) | YES |  | NULL |  |  |
| ptt_tel_home | varchar(150) | YES |  | NULL |  |  |
| ptt_office | varchar(150) | YES |  | NULL |  |  |
| ptt_ref_name | varchar(150) | YES |  | NULL |  |  |
| ptt_ref_tel | varchar(150) | YES |  | NULL |  |  |
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
