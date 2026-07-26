# `drugitems_due_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_due_type_id | int(11) | NO | PRI | 0 |  |  |
| drugitems_due_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drugitems_due_type_name | drugitems_due_type_name | yes | 1 |
| PRIMARY | drugitems_due_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drugitems_due_type_id": 7,
    "drugitems_due_type_name": "Antiplatelets"
  },
  {
    "drugitems_due_type_id": 4,
    "drugitems_due_type_name": "Drug effect in bone metabolism"
  },
  {
    "drugitems_due_type_id": 8,
    "drugitems_due_type_name": "Drug used in Alzhimer disease"
  },
  {
    "drugitems_due_type_id": 10,
    "drugitems_due_type_name": "Drug used in cardiovascular (hypertension)"
  },
  {
    "drugitems_due_type_id": 2,
    "drugitems_due_type_name": "Drug used in Diabetics"
  },
  {
    "drugitems_due_type_id": 9,
    "drugitems_due_type_name": "Drug used in psychic disease (depress)"
  },
  {
    "drugitems_due_type_id": 6,
    "drugitems_due_type_name": "Drug used in viral hepatitis"
  },
  {
    "drugitems_due_type_id": 1,
    "drugitems_due_type_name": "Lipid lowering drug"
  }
]
```
