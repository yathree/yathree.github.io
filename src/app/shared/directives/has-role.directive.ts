import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AuthorizationService } from '@shared/services/authorization.service';

@Directive({ selector: '[hasRole]' })
export class HasRoleDirective implements OnInit {
  @Input('hasRole') requiredRole: string | undefined;

  constructor(
    private elRef: ElementRef,
    private authorizeService: AuthorizationService
  ) { }

  ngOnInit(): void {
    if (
      this.requiredRole &&
      !this.authorizeService.hasRole(this.requiredRole)
    ) {
      this.elRef.nativeElement.style.display = 'none';
    }
  }
}
