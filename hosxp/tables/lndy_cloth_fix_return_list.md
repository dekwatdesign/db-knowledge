# `lndy_cloth_fix_return_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_fix_return_list_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_fix_rt_list_qty | int(11) | YES |  | NULL |  |  |
| lndy_cloth_fix_return_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_fix_req_list_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_id | lndy_cloth_id | no | 1 |
| ix_Reflndy_cloth_freq_list55 | lndy_cloth_fix_req_list_id | no | 1 |
| ix_Reflndy_cloth_freturn52 | lndy_cloth_fix_return_id | no | 1 |
| PRIMARY | lndy_cloth_fix_return_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
