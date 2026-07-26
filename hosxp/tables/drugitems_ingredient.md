# `drugitems_ingredient`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_items_ingredient_id | int(11) | NO | PRI | 0 |  |  |
| icode | char(7) | YES | MUL | NULL |  |  |
| generic_name | varchar(200) | YES | MUL | NULL |  |  |
| strength | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| total_mg | double(15,4) | YES |  | NULL |  |  |
| tmt_substance_code | varchar(6) | YES |  | NULL |  |  |
| pharmacology_group_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_generic_name | generic_name | no | 1 |
| ix_gid | pharmacology_group_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_icode | icode | no | 1 |
| PRIMARY | drug_items_ingredient_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drug_items_ingredient_id": 1,
    "icode": "1000169",
    "generic_name": "Triprolidine HCl",
    "strength": "1.25 mg",
    "hos_guid": null,
    "total_mg": null,
    "tmt_substance_code": null,
    "pharmacology_group_id": null
  },
  {
    "drug_items_ingredient_id": 2,
    "icode": "1000169",
    "generic_name": "Pseudoephedrine HCl",
    "strength": "30 mg",
    "hos_guid": null,
    "total_mg": null,
    "tmt_substance_code": null,
    "pharmacology_group_id": null
  },
  {
    "drug_items_ingredient_id": 3,
    "icode": "1000155",
    "generic_name": "Simethicone",
    "strength": "80 mg",
    "hos_guid": null,
    "total_mg": null,
    "tmt_substance_code": null,
    "pharmacology_group_id": null
  },
  {
    "drug_items_ingredient_id": 4,
    "icode": "1000098",
    "generic_name": "methylphenidate HCl",
    "strength": "18 mg",
    "hos_guid": null,
    "total_mg": null,
    "tmt_substance_code": null,
    "pharmacology_group_id": null
  },
  {
    "drug_items_ingredient_id": 5,
    "icode": "1000015",
    "generic_name": "Aripiprazole",
    "strength": "10 mg",
    "hos_guid": null,
    "total_mg": null,
    "tmt_substance_code": null,
    "pharmacology_group_id": null
  },
  {
    "drug_items_ingredient_id": 6,
    "icode": "1000016",
    "generic_name": "Aripiprazole",
    "strength": "15 mg",
    "hos_guid": null,
    "total_mg": null,
    "tmt_substance_code": null,
    "pharmacology_group_id": null
  },
  {
    "drug_items_ingredient_id": 7,
    "icode": "1000004",
    "generic_name": "Alprazolam",
    "strength": "0.25 mg",
    "hos_guid": null,
    "total_mg": null,
    "tmt_substance_code": null,
    "pharmacology_group_id": null
  },
  {
    "drug_items_ingredient_id": 8,
    "icode": "1000120",
    "generic_name": "Paliperidone",
    "strength": "3 mg",
    "hos_guid": null,
    "total_mg": null,
    "tmt_substance_code": null,
    "pharmacology_group_id": null
  }
]
```
