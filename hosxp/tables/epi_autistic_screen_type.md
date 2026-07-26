# `epi_autistic_screen_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| epi_autistic_screen_type_id | int(11) | NO | PRI | 0 |  |  |
| epi_autistic_screen_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_epi_autistic_screen_type_name | epi_autistic_screen_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | epi_autistic_screen_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "epi_autistic_screen_type_id": 1,
    "epi_autistic_screen_type_name": "Normal (0-2 คะแนน)",
    "hos_guid": null
  },
  {
    "epi_autistic_screen_type_id": 2,
    "epi_autistic_screen_type_name": "Positive (3-4 คะแนน)",
    "hos_guid": null
  },
  {
    "epi_autistic_screen_type_id": 3,
    "epi_autistic_screen_type_name": "Risk (5 คะแนนขึ้นไป)",
    "hos_guid": null
  }
]
```
