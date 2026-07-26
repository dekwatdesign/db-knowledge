# `hosxp_mki_embded`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hosxp_mki_embded_id | int(11) | NO | PRI | 0 |  |  |
| hosxp_mki_module_type_id | int(11) | YES | MUL | NULL |  |  |
| hosxp_marketplace_int_setting_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hosxp_marketplace_int_setting_id | hosxp_marketplace_int_setting_id | no | 1 |
| ix_hosxp_mki_module_type_id | hosxp_mki_module_type_id | no | 1 |
| PRIMARY | hosxp_mki_embded_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
