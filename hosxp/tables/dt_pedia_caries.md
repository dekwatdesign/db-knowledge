# `dt_pedia_caries`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_pedia_caries_id | int(11) | NO | PRI | 0 |  |  |
| dt_pedia_caries_teeth1 | int(11) | YES |  | NULL |  |  |
| dt_pedia_caries_teeth2 | int(11) | YES |  | NULL |  |  |
| dt_pedia_caries_teeth3 | int(11) | YES |  | NULL |  |  |
| dt_pedia_caries_teeth4 | int(11) | YES |  | NULL |  |  |
| dt_pedia_caries_teeth5 | int(11) | YES |  | NULL |  |  |
| dt_pedia_caries_teeth6 | int(11) | YES |  | NULL |  |  |
| dt_pedia_caries_teeth_sum1 | int(11) | YES |  | NULL |  |  |
| dt_pedia_caries_teeth_sum2 | int(11) | YES |  | NULL |  |  |
| dt_pedia_caries_surface1 | int(11) | YES |  | NULL |  |  |
| dt_pedia_caries_surface2 | int(11) | YES |  | NULL |  |  |
| dt_pedia_caries_surface3 | int(11) | YES |  | NULL |  |  |
| dt_pedia_caries_surface4 | int(11) | YES |  | NULL |  |  |
| dt_pedia_caries_surface5 | int(11) | YES |  | NULL |  |  |
| dt_pedia_caries_surface6 | int(11) | YES |  | NULL |  |  |
| dt_pedia_caries_surface_sum1 | int(11) | YES |  | NULL |  |  |
| dt_pedia_caries_surface_sum2 | int(11) | YES |  | NULL |  |  |
| dt_pedia_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_pedia_main11 | dt_pedia_main_id | no | 1 |
| PRIMARY | dt_pedia_caries_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
