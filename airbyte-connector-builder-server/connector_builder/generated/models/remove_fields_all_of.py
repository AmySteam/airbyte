# coding: utf-8

from __future__ import annotations
from datetime import date, datetime  # noqa: F401

import re  # noqa: F401
from typing import Any, Dict, List, Optional  # noqa: F401

from pydantic import AnyUrl, BaseModel, EmailStr, validator  # noqa: F401


class RemoveFieldsAllOf(BaseModel):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.

    RemoveFieldsAllOf - a model defined in OpenAPI

        field_pointers: The field_pointers of this RemoveFieldsAllOf.
    """

    field_pointers: List[List[str]]

RemoveFieldsAllOf.update_forward_refs()
