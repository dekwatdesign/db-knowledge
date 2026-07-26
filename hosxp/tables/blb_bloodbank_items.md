# `blb_bloodbank_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_bloodbank_items_id | int(11) | NO | PRI | 0 |  |  |
| blb_bloodbank_items_name | varchar(255) | YES |  | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| ecode | varchar(10) | YES | MUL | NULL |  |  |
| blb_bloodbank_items_unit | varchar(150) | YES |  | NULL |  |  |
| specimen_code | int(11) | YES | MUL | NULL |  |  |
| tmlt_code | varchar(10) | YES | MUL | NULL |  |  |
| loinc_code | varchar(15) | YES | MUL | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ecode | ecode | no | 1 |
| ix_icode | icode | no | 1 |
| ix_loinc_code | loinc_code | no | 1 |
| ix_specimen_code | specimen_code | no | 1 |
| ix_tmlt_code | tmlt_code | no | 1 |
| PRIMARY | blb_bloodbank_items_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
