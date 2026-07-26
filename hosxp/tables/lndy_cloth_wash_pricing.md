# `lndy_cloth_wash_pricing`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_wash_pricing_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_company_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_pricing_unit | int(11) | YES |  | NULL |  |  |
| lndy_cloth_wash_pricing_weight | int(11) | YES |  | NULL |  |  |
| lndy_cloth_wash_pricing_active | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_id | lndy_cloth_id | no | 1 |
| ix_Reflndy_cloth_wash_company35 | lndy_cloth_wash_company_id | no | 1 |
| PRIMARY | lndy_cloth_wash_pricing_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
