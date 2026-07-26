# `lab_items_tmlt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tmlt_code | varchar(10) | NO | PRI |  |  |  |
| tmlt_name | varchar(250) | YES |  | NULL |  |  |
| sks_code | varchar(10) | YES |  | NULL |  |  |
| price | double(22,2) | YES |  | NULL |  |  |
| tmlt_component | varchar(250) | YES |  | NULL |  |  |
| tmlt_scale | varchar(100) | YES |  | NULL |  |  |
| tmlt_unit | varchar(100) | YES |  | NULL |  |  |
| tmlt_specimen | varchar(100) | YES |  | NULL |  |  |
| tmlt_method | varchar(100) | YES |  | NULL |  |  |
| tmlt_loinc | varchar(50) | YES |  | NULL |  |  |
| tmlt_active | char(1) | YES |  | NULL |  |  |
| sks_name_ref | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | tmlt_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "tmlt_code": "220001",
    "tmlt_name": "Blood group (ABO- Cell and serum grouping) By Tube method",
    "sks_code": "22105",
    "price": 100.0,
    "tmlt_component": "Blood group (ABO- Cell and serum grouping)",
    "tmlt_scale": "Nominal",
    "tmlt_unit": null,
    "tmlt_specimen": null,
    "tmlt_method": "Tube method",
    "tmlt_loinc": null,
    "tmlt_active": "Y",
    "sks_name_ref": "Blood group (ABO- Cell and serum grouping) - Tube method"
  },
  {
    "tmlt_code": "220002",
    "tmlt_name": "Blood group (ABO- Cell and serum grouping) By Gel method",
    "sks_code": "22112",
    "price": 160.0,
    "tmlt_component": "Blood group (ABO- Cell and serum grouping)",
    "tmlt_scale": "Nominal",
    "tmlt_unit": null,
    "tmlt_specimen": null,
    "tmlt_method": "Gel method",
    "tmlt_loinc": null,
    "tmlt_active": "Y",
    "sks_name_ref": "Blood group (ABO- Cell and serum grouping) - Gel method"
  },
  {
    "tmlt_code": "220003",
    "tmlt_name": "ABO Cell grouping By Slide method",
    "sks_code": "22106",
    "price": 30.0,
    "tmlt_component": "ABO Cell grouping",
    "tmlt_scale": "Nominal",
    "tmlt_unit": null,
    "tmlt_specimen": null,
    "tmlt_method": "Slide method",
    "tmlt_loinc": null,
    "tmlt_active": "Y",
    "sks_name_ref": "ABO Cell grouping - Slide method (ในกรณีตรวจหมู่เลือดซ้ำเท่านั้น)"
  },
  {
    "tmlt_code": "220004",
    "tmlt_name": "RH. (D) Typing by Tube method",
    "sks_code": "22108",
    "price": 50.0,
    "tmlt_component": "RH. (D) Typing",
    "tmlt_scale": "Nominal",
    "tmlt_unit": null,
    "tmlt_specimen": "Blood",
    "tmlt_method": "Tube method",
    "tmlt_loinc": null,
    "tmlt_active": "Y",
    "sks_name_ref": "RH. (D) Typing - Tube method"
  },
  {
    "tmlt_code": "220005",
    "tmlt_name": "Rh. (D) Typing by Gel method",
    "sks_code": "22113",
    "price": 90.0,
    "tmlt_component": "Rh. (D) Typing",
    "tmlt_scale": "Nominal",
    "tmlt_unit": null,
    "tmlt_specimen": "Blood",
    "tmlt_method": "Gel method",
    "tmlt_loinc": null,
    "tmlt_active": "Y",
    "sks_name_ref": "Rh. (D) Typing - Gel method"
  },
  {
    "tmlt_code": "220006",
    "tmlt_name": "Rh [Type] in Blood",
    "sks_code": "22109",
    "price": 360.0,
    "tmlt_component": "Rh [Type]",
    "tmlt_scale": "Nominal",
    "tmlt_unit": null,
    "tmlt_specimen": "Blood",
    "tmlt_method": null,
    "tmlt_loinc": "10331-7",
    "tmlt_active": "Y",
    "sks_name_ref": "Rh. Typing (Complete)"
  },
  {
    "tmlt_code": "220007",
    "tmlt_name": "Antibody screening (Indirect antiglobulin test) By Tube method",
    "sks_code": "22103",
    "price": 60.0,
    "tmlt_component": "Antibody screening",
    "tmlt_scale": "Narrative",
    "tmlt_unit": null,
    "tmlt_specimen": null,
    "tmlt_method": "Tube method",
    "tmlt_loinc": null,
    "tmlt_active": "Y",
    "sks_name_ref": "Antibody screening (Indirect antiglobulin test) - Tube method"
  },
  {
    "tmlt_code": "220008",
    "tmlt_name": "Antibody screening, (Indirect antiglobulin test)  By Gel method",
    "sks_code": "22104",
    "price": 120.0,
    "tmlt_component": "Antibody screening",
    "tmlt_scale": "Ordinal",
    "tmlt_unit": null,
    "tmlt_specimen": null,
    "tmlt_method": "Gel method",
    "tmlt_loinc": null,
    "tmlt_active": "Y",
    "sks_name_ref": "Antibody screening, (Indirect antiglobulin test)  - Gel method"
  }
]
```
