# `immigration_checkup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| immigration_checkup_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| immigration_checkup_result_id | int(11) | YES |  | NULL |  |  |
| pregnancy | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |
| immigration_checkup_pttype_no | varchar(15) | YES |  | NULL |  |  |
| immigration_checkup_pttype_issueddate | date | YES |  | NULL |  |  |
| immigration_checkup_pttype_expirationdate | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | yes | 1 |
| PRIMARY | immigration_checkup_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
